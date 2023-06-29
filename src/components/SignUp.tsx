import { useState, useRef } from 'react';

import '../styles/SignUp.scss';

const SignUp = () => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const inputElement = useRef<HTMLInputElement>(null);

    const handleInputFocus = () => {
        setIsFocused(true);
    };

    const handleInputBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value: string = e.target.value;
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
        <section className='signup-section'>
            <div className='signup-background'>
                <div className='wrapper'>
                    <div className='signup-container'>
                        <span>
                            Be the first to know about events, collections and
                            news at Moda.
                        </span>
                        <form
                            className={`form ${
                                isFocused ? 'form--focused' : 'form--!focused'
                            }`}
                        >
                            <label className='form__label' htmlFor='signUp'>
                                Email
                            </label>
                            <input
                                className='form__input'
                                id='signUp'
                                onFocus={handleInputFocus}
                                onBlur={(e) => handleInputBlur(e)}
                                ref={inputElement}
                            />
                            <button className='form__button'>
                                <span>Sign up</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
