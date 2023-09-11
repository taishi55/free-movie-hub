<script lang="ts">
  let query = "";
  const searchMovie = () => {
    if (!query.trim()) return;
    window.open(`https://www.yfsp.tv/search/${query}`, "_blank");
  };
</script>

<div
  class=" bg-gray-800 text-white py-10 min-h-screen max-h-screen overflow-auto"
>
  <div class="container mx-auto">
    <div class=" flex items-center space-x-4">
      <img
        src="/icons/icon128.png"
        alt=""
        class=" aspect-square rounded w-14 h-14 border border-white"
      />
      <div class=" text-3xl font-extrabold uppercase">Free Movie Hub</div>
    </div>
    <div class=" flex flex-wrap">
      <div class="card !border-yellow-300">
        <h2>Starter Guide</h2>
        <ul>
          <li>
            <p>Seach movie title in Chinese</p>
            <div class="flex items-center space-x-2">
              <input
                type="text"
                bind:value={query}
                placeholder="Search movie title in Chinese"
                class="focus:placeholder:text-transparent text-gray-800 bg-white placeholder:text-gray-400 block outline-none px-3 py-1 rounded w-full max-w-sm"
              />

              <button
                on:click={searchMovie}
                class=" py-1 px-2 bg-blue-600 rounded !no-underline"
              >
                Search
              </button>
            </div>
          </li>
          <li>
            <p>
              If you're unsure of the Chinese title, use <a
                href="https://bard.google.com/"
                target="_blank"
                rel="noopener noreferrer">Google Bard</a
              >
              or
              <a
                href="https://chat.openai.com/"
                target="_blank"
                rel="noopener noreferrer">ChatGPT</a
              > and ask, "How is ○○○○ named in Chinese?"
            </p>
          </li>
          <li>
            <p>
              Filter movies by genres <a
                class="!no-underline bg-blue-600 py-1 px-3 rounded"
                href="https://www.yfsp.tv/list?region=%E6%AC%A7%E7%BE%8E&language=%E8%8B%B1%E8%AF%AD&year=%E4%BB%8A%E5%B9%B4"
                target="_blank"
                rel="noopener noreferrer">Here</a
              >
            </p>
          </li>
        </ul>
      </div>

      <div class="card">
        <h2>What Does This Chrome Extension Do?</h2>
        <ul>
          <li>
            <p>
              It blocks advertisements & tracking systems on yfsp.tv, providing
              an improved user experience.
            </p>
          </li>
          <li>
            <p>For movie searches, enter the title in Chinese.</p>
            <p>
              If you're uncertain about the Chinese title, <br />Ask "What is
              ○○○○ called in Chinese?" on
              <a
                href="https://bard.google.com/"
                target="_blank"
                rel="noopener noreferrer">Google Bard</a
              >
              or
              <a
                href="https://chat.openai.com/"
                target="_blank"
                rel="noopener noreferrer">ChatGPT</a
              >
            </p>
          </li>
        </ul>
      </div>

      <div class="card">
        <h2>Privacy</h2>
        <ul>
          <li>
            <p>
              This Extension is designed with user privacy in mind, requiring
              only minimal permissions to function.
            </p>
            <p>
              Specifically, it needs permission to access yfsp.tv to remove
              advertisements and tracking codes.
            </p>
          </li>
          <li>
            <p>This extension does not collect or access any user data.</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

<style lang="postcss" scoped>
  a {
    @apply underline;
  }

  li {
    @apply text-base space-y-3;
  }

  ul {
    @apply space-y-5 list-decimal mt-3 ml-4;
  }

  .card {
    @apply mt-10 mr-10 border-2 border-white rounded-xl p-8 max-w-lg;
  }

  h2 {
    @apply text-3xl font-semibold mb-5;
  }
</style>
