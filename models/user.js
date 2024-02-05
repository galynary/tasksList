const { Schema, model } = require("mongoose");

const Joi = require("joi");

const { handleMongooseError } = require("../helpers");

const phoneRegexp = /^(\+38)?0\d{9}$/;

const userSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		address: {
			type: String,
			enum: [ "Легоцького 1","Легоцького 3" ,"Легоцького 5","Лінтура 1","Лінтура 7", "Легоцького 5"," Минайська 22"],
			required: true,
		},
		
		phone: {
			type:String,
			required: true,
			unique: true,
			match: phoneRegexp,
			},
			tariffs: {
				type: String,
				enum: ["Базовий", "Сімейний", "Бізнес"],
				required: true
				},
		verify: {
			type: Boolean,
			default: false,
		},
		verificationToken: {
			type: String,
			required: [true, "Verify token is required"],
			default: "",
		},
		token: String,
	},
	{ versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const registerSchema = Joi.object({
	name: Joi.string(),
	address: Joi.string(),
	phone: Joi.number().pattern(phoneRegexp).required(),
	tariffs: Joi.string(),
});



const User = model("user", userSchema);

const schema = { registerSchema };

module.exports = { User, schema };
