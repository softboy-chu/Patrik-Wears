import React from 'react'

export default function Color() {
  return (
    <div>
      <div>
        <form class="max-w-sm mx-auto">
            {/* <label for="shoe sizes" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">What's your size?</label> */}
            <select id="countries" className="bg-[#D9D9D9] border border-[#D9D9D9] text-gray-900 text-sm rounded-lg block w-full p-2 ">
              <option selected>Choose your color</option>
              <option value="US">Artic brown</option>
              <option value="CA">Beige</option>
              <option value="FR">Slategreen</option>
              <option value="DE">Slateblue</option>
            </select>
          </form>
      </div>
    </div>
  )
}