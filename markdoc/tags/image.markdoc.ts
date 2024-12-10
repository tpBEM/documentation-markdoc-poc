import Image from '../../components/Image';

export const image = {
    render: Image,
    attributes: {
        src: { type: String, required: true },
        alt: { type: String, required: true },
    }
};
