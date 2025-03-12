export default function ContactContent({image, name, phoneno, email}) {
    return (
        <article className="contact-card">
            <img
                src={image}
                alt={name}
            />
            <h3>{name}</h3>
            <div className="info-group">
                <img
                    src="src/assets/phone-icon.png"
                    alt="phone icon"
                />
                <p>{phoneno}</p>
            </div>
            <div className="info-group">
                <img
                    src="src/assets/mail-icon.png"
                    alt="mail icon"
                />
                <p>{email}</p>
            </div>
        </article>
    )
}