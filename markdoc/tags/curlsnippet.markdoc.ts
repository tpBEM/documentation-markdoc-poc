import CurlSnippet from "../../components/CurlSnippet";

export const curlsnippet = {
    render: CurlSnippet,
    attributes: {
        command: { type: String, required: true }
    },
};