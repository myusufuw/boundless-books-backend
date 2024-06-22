export const HomePage = () => (
  <div class="p-4 w-full h-screen justify-center items-center flex bg-[url('https://images.unsplash.com/photo-1569728723358-d1a317aa7fba?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-center bg-cover">
    <div class="p-4 bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 border border-gray-500 md:w-[30%] flex flex-col">
      <p class="text-gray-100 text-center text-xl">Boundless Books REST API</p>
      <p class="text-gray-100 mt-2">
        Boundless Books API is a backend application that provides various
        information about simple online book store.
      </p>
      <p class="text-gray-100 mt-2">
        The primary goal of Boundless Books is to provide an easily accessible
        platform for managing simple online book store application. This
        application is designed for developers who want to build applications or
        services that require online store data management features.
      </p>

      <div class="flex mt-6 flex-col md:flex-row gap-4 md:gap-0 md:justify-around">
        <a
          href="/docs"
          target="_blank"
          class="text-white border border-1 border-gray-100 py-2 px-4 rounded hover:border-cyan-500 hover:text-cyan-500 text-center md:w-[45%]"
        >
          API Docs
        </a>
        <a
          href="/ui"
          target="_blank"
          class="text-white border border-1 border-gray-100 py-2 px-4 rounded hover:border-cyan-500 hover:text-cyan-500 text-center md:w-[45%]"
        >
          Swagger UI
        </a>
      </div>
    </div>
  </div>
)
