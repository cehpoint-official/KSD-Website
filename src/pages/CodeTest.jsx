import React, { useState } from 'react';

const CodeTest = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <form className="max-w-sm mx-auto">
                <div className="flex">
                    <div>
                        <button
                            id="states-button"
                            type="button"
                            onClick={toggleDropdown}
                        >
                            usa
                        </button>
                    </div>
                    <div
                        id="dropdown-states"
                        className={`z-10 ${isOpen ? '' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
                    >
                        sdfgkg
                    </div>
                </div>
            </form>
        </>
    );
};

export default CodeTest;
