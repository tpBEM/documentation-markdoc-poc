import { Tag } from '@markdoc/markdoc';

export function swaggerToMarkdoc(path: string, method: string, details: any): Tag {
  const children: Tag[] = [];

  // Add parameters
  if (details.parameters) {
    for (const parameter of details.parameters) {
      children.push(
        new Tag('parameter', {
          name: parameter.name,
          in: parameter.in,
          required: parameter.required,
          type: parameter.type,
        })
      );
    }
  }

  // Add responses
  if (details.responses) {
    for (const [code, response] of Object.entries(details.responses)) {
      children.push(
        new Tag('response', {
          code,
          description: (response as { description: string }).description,
        })
      );
    }
  }

  return new Tag('document', {}, [
    new Tag('heading', { level: 2 }, [new Tag('text', {}, [path])]),
    new Tag('heading', { level: 3 }, [new Tag('text', {}, ['Summary'])]),
    new Tag('paragraph', {}, [new Tag('text', {}, [details.summary || 'No summary available.'])]),
    new Tag('heading', { level: 3 }, [new Tag('text', {}, ['Description'])]),
    new Tag('paragraph', {}, [new Tag('text', {}, [details.description || 'No description available.'])]),
    new Tag('heading', { level: 3 }, [new Tag('text', {}, ['Parameters'])]),
    new Tag('list', {}, children.filter(child => child.name === 'parameter')),
    new Tag('heading', { level: 3 }, [new Tag('text', {}, ['Responses'])]),
    new Tag('list', {}, children.filter(child => child.name === 'response')),
  ]);
}