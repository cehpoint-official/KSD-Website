import React from 'react'

const QuePage = () => {
    return <div className='my-20 mx-10 bg-green-600'>

        <form class=" bg-red-500 w-full">
            <label for="underline_select" class="sr-only">Underline select</label>
            <select id="underline_select" class="w-full p-3 border-b-4 text-xl">
                <option selected>What are the services offered by KSD technologies?</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
            </select>
        </form>
        <form class=" bg-red-500 w-full">
            <label for="underline_select" class="sr-only">Underline select</label>
            <select id="underline_select" class="w-full p-3 text-xl border-b-4 ">
                <option selected>What is reverse engineering?</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
            </select>
        </form>
        <form class=" bg-red-500 w-full">
            <label for="underline_select" class="sr-only">Underline select</label>
            <select id="underline_select" class="w-full p-3 text-xl ">
                <option selected>What is 3D scanning?</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
            </select>
        </form>

    </div>
}

export default QuePage