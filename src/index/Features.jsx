import React from 'react'
// TODO: array au lieu de props
function Features(props) {
    const name = props.name;
    const imgName = "/img/icon-" + name + ".png";
    const imgAlt = name[0].toUpperCase() + name.slice(1) + "Icon";
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

    const infos = featureArray.filter((feature) => feature.name === name)
    const title = infos[0].title;
    const text = infos[0].text;

    return (

        <div className='feature-item'>
            <img className='feature-icon' src={imgName} alt={imgAlt} />
            <h3 className='feature-item-title'>{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default Features