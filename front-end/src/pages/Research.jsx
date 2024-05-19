import React from "react";

function Research() {
  return (
    <>
      {/* HEADER  */}

      <div className="relative mx-auto bg-white bg-opacity-10 bg-cover bg-center md:max-w-screen-lg ">
        <img
          class="absolute h-full w-full object-cover"
          src="https://plus.unsplash.com/premium_photo-1682484702272-38ed0d66a715?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <div className="text-zinc-100 lg:w-1/2">
          <div className="bg-lime-300 bg-opacity-95 p-5 opacity-90 backdrop-blur-lg lg:p-12">
            {/* <p class="mb-4 font-serif font-light"></p> */}
            <h2 className="font-serif text-4xl font-bold">
              Leading the next generation of biomimicry innovators
            </h2>
            {/* <a href="#" class="mt-6 inline-block rounded-xl border-2 px-10 py-3 font-semibold border-white hover:bg-white hover:text-blue-600"> Read Now </a> */}
          </div>
        </div>
      </div>

      {/* PROJECTS CARDS */}
      <section className="mx-auto max-w-screen-lg px-4 py-12">
        <div className="mb-12 text-center">
          <div className="mb-6 text-3xl font-bold sm:text-5xl">
            Tamurt:<br></br> Where Science and Design Converge
          </div>
          <p className="">
            At Tamurt, we believe that the future of design lies at the
            intersection of science and creativity.<br></br> Join us in
            advancing biomimetic design for a sustainable and harmonious world.
          </p>
        </div>
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          <article className="">
            <a
              href="#"
              className="flex flex-col rounded border bg-white transition hover:bg-gray-200 hover:scale-110 ease-in-duration-200"
            >
              {/* ATELIER ONE */}
              <div className="sm-atelier-1">
                <div className="aspect-w-3 aspect-h-2 overflow-hidden ">
                  <img
                    src="https://images.unsplash.com/photo-1475783006851-1d68dd683eff?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 p-4 ">
                <p className="mb-4 text-lg font-bold">BioLight Atelier</p>
                <h6 className="mb-4 text-xl font-light">
                  Lumina Naturae: Illuminating Inspiration
                </h6>
                <p className="mb-4 text-xs">
                  Shedding light on nature's secrets, one lamp at a time.
                </p>
                <button
                  type="submit"
                  className="group mt-4 flex w-full items-center justify-center rounded-md bg-violet-300 px-5 py-3 text-white transition sm:mt-0 sm:w-auto focus:outline-none focus:ring focus:ring-indigo-200"
                >
                  <span className="text-sm font-medium"> Learn More </span>

                  <svg
                    className="group-hover:translate-x-2 ml-3 h-5 w-5 transition-all"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </a>
          </article>
          <article className="">
            <a
              href="#"
              className="flex flex-col rounded border bg-white transition hover:bg-gray-200 hover:scale-110 ease-in-duration-200"
            >
              {/* ATELIER TWO */}
              <div className="sm-atelier-2">
                <div className="aspect-w-3 aspect-h-2 overflow-hidden">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1661456160332-628feba90163?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 p-4">
                <p className="mb-4 text-lg font-bold">Biomechanics Studio</p>
                <h6 className="mb-4 text-xl font-light">
                  ErgoNatura: Where Comfort Meets Biology
                </h6>
                <p className="mb-4 text-xs">
                  Nature's blueprint for ergonomic design. <br></br>
                  <p className="text-white">!</p>
                </p>
                <button
                  type="submit"
                  class="group mt-4 flex w-full items-center justify-center rounded-md bg-violet-300 px-5 py-3 text-white transition sm:mt-0 sm:w-auto focus:outline-none focus:ring focus:ring-indigo-200"
                >
                  <span className="text-sm font-medium"> Learn More </span>

                  <svg
                    className="group-hover:translate-x-2 ml-3 h-5 w-5 transition-all"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </a>
          </article>
          {/* ATELIER THREE */}
          <article className="sm-atelier-3">
            <a
              href="#"
              class="flex flex-col rounded border bg-white transition hover:bg-gray-200 hover:scale-110 ease-in-duration-200"
            >
              <div className="">
                <div className="aspect-w-3 aspect-h-2 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1492371451031-f0830e91b3d9?q=80&w=2750&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 p-4">
                <p className="mb-4 text-lg font-bold">Future Forms Lab</p>
                <h6 className="mb-4 text-xl font-light">
                  MorphoGen: Shaping Tomorrow's Innovations
                </h6>
                <p className="mb-4 text-xs">
                  Designing the future, guided by the wisdom of nature.
                </p>
                <button
                  type="submit"
                  className="group mt-4 flex w-full items-center justify-center rounded-md bg-violet-300 px-5 py-3 text-white transition sm:mt-0 sm:w-auto focus:outline-none focus:ring focus:ring-indigo-200"
                >
                  <span className="text-sm font-medium"> Learn More </span>

                  <svg
                    className="group-hover:translate-x-2 ml-3 h-5 w-5 transition-all"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
                {/* <p class="mb-4 text-sm">Read More</p> */}
              </div>
            </a>
          </article>
        </div>
      </section>

      {/* ARTICLE ONE */}
      <article className="article-1 mx-2 my-10 max-w-screen-lg rounded-md border border-gray-100 shadow-md md:mx-auto w-full h-full ">
        <div className="flex flex-col md:flex-row">
          <div className="p-5 md:w-4/6 md:p-8">
            <div className="">
              <p className="mt-2 text-xl font-serif font-black md:mt-6 md:text-4xl mb-6">
                Biolight Atelier
              </p>
              <p className="mt-3 text-violet-400 font-semibold text-lg">
                Illuminate Nature's Wisdom
              </p>
              <p className="mt-3 text-black-600">
                Step into our BioLight Atelier, where we merge scientific
                inquiry with design innovation to create lighting solutions
                inspired by the wonders of the natural world.
              </p>
              <p className="mt-3 text-violet-400 font-semibold text-lg">
                From Concept to Creation
              </p>
              <p className="mt-3 text-black-600">
                Explore our collection of biomimetic lamps, each a testament to
                the beauty and functionality found in nature's design.
              </p>
              <p className="mt-3 text-violet-400 font-semibold text-lg">
                Join the Illumination Revolution
              </p>
              <p className="mt-3 mb-3">
                Collaborate with us to shed new light on biomimicry research and
                translate it into stunning, sustainable lighting solutions.
                Contact us to embark on this enlightening journey together.
              </p>
            </div>
            {/* <div className=" flex justify-center"> */}
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-orange-400 py-2 px-4 text-sm font-medium text-slate-50 shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-grape-500 focus:ring-offset-2"
            >
              Join Us
            </button>
            {/* </div> */}
          </div>
          <div className="mx-auto w-full hidden items-center px-5 md:flex md:p-8">
            <img
              className="rounded-md shadow-lg w-42"
              src="https://images.unsplash.com/photo-1475783006851-1d68dd683eff?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Biolight Atelier"
            />
          </div>
        </div>
      </article>
      {/* ARTICLE TWO */}

      <div className="flex-1 p-4"></div>
      <article className="article-1 mx-2 my-10 max-w-screen-lg rounded-md border border-gray-100 shadow-md md:mx-auto w-full h-full">
        <div className="flex flex-col md:flex-row">
          <div className="p-5 md:w-4/6 md:p-8">
            <div className="">
              <p className="mt-2 text-xl font-serif font-black md:mt-6 md:text-4xl mb-6">
                Biomechanics Studio
              </p>
              <p className="mt-3 text-violet-400 font-semibold text-lg">
                Where Nature Meets Comfort
              </p>
              <p className="mt-3 text-black-600">
                Step into our Biomechanics Studio, where we blend biology with
                furniture design to create seating solutions that prioritize
                both form and function.
              </p>
              <p className="mt-3 text-violet-400 font-semibold text-lg">
                Sitting Naturally
              </p>
              <p className="mt-3 text-black-600">
                Discover our range of chairs and couches, engineered with
                insights from nature to provide unparalleled comfort and
                support.
              </p>
              <p className="mt-3 text-violet-400 font-semibold text-lg">
                Join the Seating Evolution
              </p>
              <p className="mt-3 text-gray-600 mb-3">
                Collaborate with us to revolutionize the way we sit and interact
                with our environment. Reach out to explore the endless
                possibilities of biomimetic furniture design.
              </p>
            </div>
            {/* <div className=" flex justify-center"> */}
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-orange-400 py-2 px-4 text-sm font-medium text-slate-50 shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-grape-500 focus:ring-offset-2"
            >
              Join Us
            </button>
            {/* </div> */}
          </div>
          <div className="mx-auto w-full hidden items-center px-5 md:flex md:p-8">
            <img
              className="rounded-md shadow-lg w-42"
              src="https://plus.unsplash.com/premium_photo-1661456160332-628feba90163?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Biolight Atelier"
            />
          </div>
        </div>
      </article>
      {/* ARTICLE THREE */}
      <article className="article-1 mx-2 my-10 max-w-screen-lg rounded-md border border-gray-100 shadow-md md:mx-auto w-full h-full">
        <div className="flex flex-col md:flex-row">
          <div className="p-5 md:w-4/6 md:p-8">
            <div className="">
              <p className="mt-2 text-xl font-serif font-black md:mt-6 md:text-4xl mb-6">
                Future Forms Lab
              </p>
              <p className="mt-3 text-violet-400 font-semibold text-lg">
                Designing Tomorrow, Today
              </p>
              <p className="mt-3 text-black-600">
                Welcome to our Future Forms Lab, where imagination knows no
                bounds and creativity is fueled by nature's infinite variety.
              </p>
              <p className="mt-3 text-violet-400 font-semibold text-lg">
                Pushing the Boundaries
              </p>
              <p className="mt-3 text-black-600">
                Explore our gallery of visionary biomimetic products, where form
                follows function in ways yet unseen.
              </p>
              <p className="mt-3 text-violet-400 font-semibold text-lg">
                Shape the Future with Us
              </p>
              <p className="mt-3  mb-3">
                Be part of the vanguard of biomimicry design. Whether you're a
                scientist, designer, or dreamer, let's collaborate to bring
                tomorrow's innovations to life.
              </p>
            </div>
            {/* <div className=" flex justify-center"> */}
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-orange-400 py-2 px-4 text-sm font-medium text-slate-50 shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-grape-500 focus:ring-offset-2"
            >
              Join Us
            </button>
            {/* </div> */}
          </div>
          <div className="mx-auto w-full hidden items-center px-5 md:flex md:p-8">
            <img
              className="rounded-md shadow-lg w-42"
              src="https://images.unsplash.com/photo-1492371451031-f0830e91b3d9?q=80&w=2750&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Biolight Atelier"
            />
          </div>
        </div>
      </article>

      {/* CONTACT SECTION */}

      <div className="relative bg-white">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover lg:absolute lg:h-full"
              src="https://images.unsplash.com/photo-1698417945941-002d5764e98b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
        <div className="relative w-full h-full py-16 px-6 sm:py-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:py-32">
          <div className="lg:pr-8">
            <div className="mx-auto max-w-md sm:max-w-lg lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Let's work together
              </h2>
              {/* <p class="mt-4 text-lg text-gray-500 sm:mt-3">
                We’d love to hear from you! Send us a message using the form
                opposite, or email us. We’d love to hear from you! Send us a
                message using the form opposite, or email us.
              </p> */}
              <form
                action="#"
                method="POST"
                className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <div>
                  <label
                    for="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autocomplete="given-name"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    for="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autocomplete="family-name"
                      class="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    for="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autocomplete="email"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    for="company"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Occupation
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      autocomplete="organization"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label
                      for="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone
                    </label>
                    <span id="phone-description" class="text-sm text-gray-500">
                      Optional
                    </span>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autocomplete="tel"
                      aria-describedby="phone-description"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                    />
                  </div>
                </div>
                {/* <div class="sm:col-span-2">
                  <div class="flex justify-between">
                    <label for="how-can-we-help" class="block text-sm font-medium text-gray-700">How can we help you?</label>
                    <span id="how-can-we-help-description" class="text-sm text-gray-500">Max. 500 characters</span>
                  </div>
                  <div class="mt-1">
                    <textarea id="how-can-we-help" name="how-can-we-help" aria-describedby="how-can-we-help-description" rows="4" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm" />
                  </div>
                </div> */}

                {/* FIELDSET */}
                {/* <fieldset class="sm:col-span-2">
                  <legend class="block text-sm font-medium text-gray-700">
                    Your Atelier of Interest
                  </legend>
                  <div class="mt-4 grid grid-cols-1 gap-y-4">
                    <div class="flex items-center">
                      <input
                        id="budget-under-25k"
                        name="budget"
                        value="under_25k"
                        type="radio"
                        class="h-4 w-4 border-gray-300 text-grape-600 focus:ring-grape-500"
                      />
                      <label for="budget-under-25k" class="ml-3">
                        <span class="block text-sm text-gray-700">
                          Biolight Atlier
                        </span>
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="budget-25k-50k"
                        name="budget"
                        value="25k-50k"
                        type="radio"
                        class="h-4 w-4 border-gray-300 text-grape-600 focus:ring-grape-500"
                      />
                      <label for="budget-25k-50k" class="ml-3">
                        <span class="block text-sm text-gray-700">
                          Biomechanics Studio
                        </span>
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="budget-50k-100k"
                        name="budget"
                        value="50k-100k"
                        type="radio"
                        class="h-4 w-4 border-gray-300 text-grape-600 focus:ring-grape-500"
                      />
                      <label for="budget-50k-100k" class="ml-3">
                        <span class="block text-sm text-gray-700">
                          Future Forms Lab
                        </span>
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input id="budget-over-100k" name="budget" value="over_100k" type="radio" class="h-4 w-4 border-gray-300 text-grape-600 focus:ring-grape-500" />
                      <label for="budget-over-100k" class="ml-3">
                        <span class="block text-sm text-gray-700">$100K+</span>
                      </label>
                    </div>
                  </div>
                </fieldset> */}
                {/* <div class="sm:col-span-2">
                  <label
                    for="how-did-you-hear-about-us"
                    class="block text-sm font-medium text-gray-700"
                  >
                    How did you hear about us?
                  </label>
                  <div class="mt-1">
                    <input
                      type="text"
                      name="how-did-you-hear-about-us"
                      id="how-did-you-hear-about-us"
                      class="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                    />
                  </div>
                </div> */}

                {/* TEST */}
                <div className="col-span-1 flex flex-col">
                  <legend className="block text-sm font-medium text-gray-700 mb-2">
                    Your Atelier of Interest
                  </legend>
                  <select
                    className="rounded-lg border px-2 py-2 shadow-sm outline-none focus:ring"
                    name=""
                    id=""
                  >
                    <option value="Biolight Atlier">Biolight Atlier</option>
                    <option value="Biomechanics Studio">
                      Biomechanics Studio
                    </option>
                    <option value="Future Forms Lab">Future Forms Lab</option>
                  </select>
                </div>

                <div className="text-right sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-lime-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-lime-400 focus:outline-none focus:ring-2 focus:ring-grape-500 focus:ring-offset-2"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Research;
