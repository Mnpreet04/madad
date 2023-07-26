    import React from 'react'
    import styles from './Options.module.css'
    import Option from './Option';

    const Options = () => {
        const DUMMY_OPTIONS = [
            {
            id: 'e1',
            title: 'Beginner Driver Education Program',
            amount: 294.12,
            additionalInformation:'This program has 3 components. 1. Classroom 2. Drive Online home assignment and 3. In-Car training. Upon successful completion it may save you on auto insurance and allows you to go for G2 license in 8 months time.',
            path:"/beginerDriverEducation"
            },
            { id: 'e2',
            title: 'Advanced Beginner Driver Education Program',
            amount: 799.49, 
            additionalInformation:'This program has 3 components. 1. Classroom 2. Drive Online home assignment and 3. In-Car training. Upon successful completion it may save you on auto insurance and allows you to go for G2 license in 8 months time.',
            path:"/beginerDriverEducation"
            },
            {
            id: 'e3',
            title: 'G2 Road Test Packages',
            amount: 294.67,
            additionalInformation:'This program has 3 components. 1. Classroom 2. Drive Online home assignment and 3. In-Car training. Upon successful completion it may save you on auto insurance and allows you to go for G2 license in 8 months time.',
            path:"/beginerDriverEducation"
            },
            {
            id: 'e4',
            title: 'G Road Test Packages',
            amount: 450.00,
            additionalInformation:'This program has 3 components. 1. Classroom 2. Drive Online home assignment and 3. In-Car training. Upon successful completion it may save you on auto insurance and allows you to go for G2 license in 8 months time.',
            path:"/beginerDriverEducation"
            },
        ];
    return (
        <ul className={styles.options_list}>
        {DUMMY_OPTIONS.map((option) => (
            <Option
            key={option.id}
            title={option.title}
            amount={option.amount}
            additionalInformation={option.additionalInformation}
            path={option.path}
            />
        ))}
        </ul>
    );
    }

    export default Options