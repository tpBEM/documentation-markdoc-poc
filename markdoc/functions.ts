/* Use this file to export your Markdoc functions */

export const includes = {
  transform(parameters) {
    const [array, value] = Object.values(parameters);

    return Array.isArray(array) ? array.includes(value) : false;
  },
};

export const upper = {
  transform(parameters) {
    const string = parameters[0];
    return typeof string === 'string' ? string.toUpperCase() : string;
  },
};

export const generateCodeSnippets = (curlCommand) => {
  return {
    curl: curlCommand,
    python: `import requests\n\nresponse = requests.get("https://api.example.com/resource")\nprint(response.text)`,
    javascript: `fetch("https://api.example.com/resource")\n  .then(response => response.json())\n  .then(data => console.log(data));`,
    java: `import java.net.HttpURLConnection;\nimport java.net.URL;\n\nURL url = new URL("https://api.example.com/resource");\nHttpURLConnection con = (HttpURLConnection) url.openConnection();\ncon.setRequestMethod("GET");`,
  };
}
