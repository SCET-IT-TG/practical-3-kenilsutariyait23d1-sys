import React from 'react';
import Counter from './component/Counter';
import TweetInput from './component/TweetInput';
import ThemeSwitcher from './component/ThemeSwitcher';

function App() {
    return (
        <div>
            <h1>React Components Demo</h1>
            <Counter />
            <TweetInput />
            <ThemeSwitcher />
        </div>
    );
}

export default App;