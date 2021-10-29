import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            default: "",
        },
        time: {
            type: Date,
            required: true,
        },
        isDone: {
            type: Boolean,
            default: false,
        },
        createdAt: {
            type: Date,
            default: new Date(),
        },
        creatorId: {
            type: String,
            // required: true,
        },
    },
    {
        toJSON: {
            transform(doc, ret) {
                ret.id = ret._id;
                delete ret._id;
                delete ret.__v;
            },
        },
    }
);

const Task = mongoose.model("task", taskSchema);

export default Task;
