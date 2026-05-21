export default function Main(props) {
    const { data } = props
    return (
        <div className="imgContainer">
            {data.media_type === 'video' ? (
                <iframe
                    src={data.url}
                    title={data.title || "NASA Video"}
                    className="bgImage"
                    allowFullScreen
                />
            ) : (
                <img
                    src={data.hdurl || data.url}
                    alt={data.title || "bg-img"}
                    className="bgImage"
                />
            )}
        </div>
    )
}