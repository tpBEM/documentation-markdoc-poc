export default function Image({ src, alt }) {
    return (
        <img src={src} alt={alt} style={{ display: 'block', margin: '0 auto' }} />
    );
}