import React from 'react';

const Article = ({ title, date = "January 1, 1970", preview, minutesToRead }) => {
    const renderReadTime = () => {
        if (minutesToRead < 30) {
            const cups = Math.ceil(minutesToRead / 5);
            return `☕️`.repeat(cups) + ` ${minutesToRead} min read`;
        } else {
            const bentos = Math.ceil(minutesToRead / 10);
            return `🍱`.repeat(bentos) + ` ${minutesToRead} min read`;
        }
    };

    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            <p>{renderReadTime()}</p>
        </article>
    );
};

export default Article;