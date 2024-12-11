import CurlSnippet from "../../components/CurlSnippet";

export const curlsnippet = {
    render: CurlSnippet,
    attributes: {
        command: { type: String, required: true },
        lang: { type: String, default: "all" }, // Can be "all" or a specific language
      },
};