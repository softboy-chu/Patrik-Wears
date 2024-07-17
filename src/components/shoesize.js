import React from 'react'

export default function Size() {
  return (
    <div>
      <div>
        <form class="max-w-sm mx-auto">
            {/* <label for="shoe sizes" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">What's your size?</label> */}
            <select id="countries" className="bg-[#D9D9D9] border border-[#D9D9D9] text-gray-900 text-sm rounded-lg block w-full p-2 ">
              <option selected>Choose your size</option>
              <option value="US">33</option>
              <option value="CA">34</option>
              <option value="FR">35</option>
              <option value="DE">36</option>
            </select>
          </form>
      </div>
    </div>
  )
}
