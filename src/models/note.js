import { model, Schema } from 'mongoose';
import { TAGS } from '../constants/tags.js';

const NoteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      default: '',
      trim: true,
    },
    tag: {
      type: String,
      default: 'Todo',
      enum: [
        ...TAGS,
      ],
    },
  },
  {
    timestamps: true,
  },
);

NoteSchema.index(
  { title: 'text', content: 'text' },
  {
    weights: {
      title: 5,
      content: 1,
    },
    name: 'NoteTextIndex',
  },
);

export const Note = model('Note', NoteSchema);
