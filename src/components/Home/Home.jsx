import React from 'react';
import Header from './Header/Header';
import SkillsSection from './SkillsSection/SkillsSection';
import Project1 from './Project1Section/Project1';
import Project2 from './project2Section/Project2';
import Project3 from './Project3Section/Project3';
import Facts from './FactsSection/Facts';

const Home = () => {
    return (
        <>
            <Header />
            <SkillsSection />
            <Project1 />
            <Project2 />
            <Project3 />
            <Facts />
        </>
    );
};

export default Home;