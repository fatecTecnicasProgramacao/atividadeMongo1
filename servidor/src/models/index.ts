import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
    mail: {
        type: String,
        maxlength: [50, "O e-mail pode ter no máximo 30 caracteres"],
        unique: true,
        required: [true, "O e-mail é obrigatório"],
        validate: {
            validator: function (value: string) {
                const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return regex.test(value);
            },
            message: (props: any) =>
                `${props.value} não é um formato de e-mail válido`,
        },
    },
    password: {
        type: String,
        trim: true,
        minlength: [6, "A senha precisa ter no mínimo 6 caracteres"],
        maxlength: [10, "A senha precisa ter no máximo 10 caracteres"],
        select: false,
        required: [true, "A senha é obrigatória"],
    },
});
const SpentSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        validate: {
            validator: async function (id: string) {
                const user = await User.findById(id);
                return !!user;
            },
            message: 'O usuário fornecido não existe',
        },
    },
    description: {
        type: String,
        maxlength: 30,
        required: [true, "A descrição é obrigatória"],
    },
    value: {
        type: Number,
        required: [true, "O valor é obrigatório"],
    },
});

const User = mongoose.model("User", UserSchema);
const Spent = mongoose.model("Spent", SpentSchema);
export { User, Spent };
