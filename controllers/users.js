const { User } = require("../models/user");
const { ctrlWrapper, HttpError } = require("../helpers");

const register = async (req, res) => {
	try {
		const { name, address, phone, tariff } = req.body;

		// Перевірка, чи користувач з такими даними вже існує
		const existingUser = await User.findOne({ name, address, phone, tariff });
		if (existingUser) {
			throw HttpError(409, "На цю адресу вже була подана заявка");
		}

		// Створення нового користувача
		const newUser = new User({
			name,
			address,
			phone,
			tariff,
		});
		await newUser.save();

		// Відправлення відповіді клієнту
		res.send(`Дякуємо, ${name}! Ваша заявка прийнята.`);
	} catch (error) {
		// Обробка помилок
		console.error("Error in registration:", error);
		res.status(error.status || 500).json({ error: error.message || "Internal Server Error" });
	}
};
const { Contact } = require("../models/contact");

const { schemas } = require("../models/contact");

const { HttpError, ctrlWrapper } = require("../helpers");

const listContacts = async (req, res) => {
	const { _id: owner } = req.user;
	const { page = 1, limit = 20 } = req.query;
	// пагінація контактів
	const skip = (page - 1) * limit;
	const result = await Contact.find({ owner }, "-createdAt -updatedAt", {
		skip,
		limit,
	}).populate("owner", "name, email");
	res.status(200).json(result);
};

const getContactById = async (req, res) => {
	const { error } = schemas.addSchema.validate(req.body);
	if (error) {
		throw HttpError(404, error.message);
	}
	const { id } = req.params;
	const result = await Contact.findById({ id });
	// const result = await Contact.findOne({ _id: contactId });
	res.status(200).json(result);
};

const addContact = async (req, res) => {
	const { _id: owner } = req.user;
	const { error } = schemas.addSchema.validate(req.body);
	if (error) {
		throw HttpError(400, "missing required name field");
	}
	const result = await Contact.create({ ...req.body, owner });
	if (!result) {
		throw HttpError(404, "Not found");
	}
	res.status(201).json(result);
};

const removeContact = async (req, res, next) => {
	const { contactId } = req.params;
	const result = await Contact.removeContact(contactId);
	if (!result) {
		throw HttpError(404, "Not found");
	}
	res.status(200).json({ message: "contact deleted" });
};

const updateContact = async (req, res) => {
	const { error } = schemas.updateSchema.validate(req.body);
	if (error) {
		throw HttpError(404, "missing fields");
	}
	const { contactId } = req.params;
	const result = await Contact.findIdAndUpdate(contactId, req.body);
	if (!result) {
		throw HttpError(404, "Not found");
	}
	res.status(200).json(result);
};

const updateFavorite = async (req, res) => {
	const { error } = schemas.updateFavoriteSchema.validate(req.body);
	if (error) {
		throw HttpError(404, "missing fields");
	}
	const { contactId } = req.params;
	const result = await Contact.findIdAndUpdate(contactId, req.body, {
		new: true,
	});
	if (!result) {
		throw HttpError(404, "Not found");
	}
	res.status(200).json(result);
};

module.exports = {
	listUsers: ctrlWrapper(listUsers),
	getUserById: ctrlWrapper(getUserById),
	addContact: ctrlWrapper(addContact),
	removeContact: ctrlWrapper(removeContact),
	updateContact: ctrlWrapper(updateContact),
	updateFavorite: ctrlWrapper(updateFavorite),
};


module.exports = {
	register: ctrlWrapper(register),
};
