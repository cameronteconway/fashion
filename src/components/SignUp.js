import { useState, useRef } from 'react';

import '../styles/SignUp.css';

const SignUp = () => {
    const [isFocused, setIsFocused] = useState(false);
    const inputElement = useRef();

    const handleInputFocus = () => {
        setIsFocused(true);
    };

    const handleInputBlur = e => {
        let value = e.target.value;
        value.trim();

        if (!value.replace(/\s/g, '').length) {
            value = '';
            e.target.value = '';
        }

        if (value === '') {
            setIsFocused(false);
        }
    };

    return (
        <section class='signup-section section-scroll'>
            <div className='signup-background'>
                <div className='wrapper'>
                    <div className='signup-container'>
                        <span>
                            Be the first to know about events, collections and
                            news at Moda.
                        </span>
                        <form>
                            <div
                                className={`form-container ${
                                    isFocused ? 'focused' : '!focused'
                                }`}
                            >
                                <div className='form-input'>
                                    <label htmlFor='signUp'>Email</label>
                                    <input
                                        id='signUp'
                                        onFocus={handleInputFocus}
                                        onBlur={e => handleInputBlur(e)}
                                        ref={inputElement}
                                    />
                                </div>
                                <button>
                                    <span>Sign up</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
