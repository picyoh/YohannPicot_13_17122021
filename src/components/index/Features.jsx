import React from 'react'

function Features() {
    const featureArray = [
        {
            name: "chat",
            title: "You are our #1 priority",
            text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        },
        {
            name: "money",
            title: "More Moneys means higher rates",
            text: "The more you save with us, the higher your interest rate will be!"
        },
        {
            name: "security",
            title: "Security you can trust",
            text: "We use top of the line encryption to make sure your data and money is always safe."
        }
    ];

    const features = featureArray.map((feature, index) => {
        const imgName = "/img/icon-" + feature.name + ".png";
        const imgAlt = feature.name[0].toUpperCase() + feature.name.slice(1) + "Icon";
        const title = feature.title;
        const text = feature.text;
        return (
            <div className='feature-item' key={index}>
                <img className='feature-icon' src={imgName} alt={imgAlt} />
                <h3 className='feature-item-title'>{title}</h3>
                <p>{text}</p>
            </div>
        )
    })

    return (
        <>
            {features}
        </>
    )
}

export default Features