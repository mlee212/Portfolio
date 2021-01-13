export default function ProjectCard({ date, category, children, image, href }) {
  return (
    <a href={href} target="_blank">
      <figure class="md:flex bg-white dark:bg-cardbgdark rounded-xl p-8 md:p-0 shadow-xl mb-4 transition duration-500 ease-in-out transform hover:-translate-y-1">
        <img
          class="w-32 h-32 md:w-48 md:h-48 md:p-4 m-auto"
          src={image}
          alt="Product Logo"
          width="512"
          height="512"
        />
        <div class="pt-6 md:py-8 md:pr-8 text-center md:text-left space-y-4">
          <figcaption class="font-medium">
          <div class="text-sm text-gray-600 dark:text-gray-400 uppercase">{date}</div>
            <div class="text-lg text-black dark:text-white">{category}</div>
          </figcaption>
          <blockquote>
            <p class="md:text-lg text-md dark:text-white">{children}</p>
          </blockquote>
        </div>
      </figure>
    </a>
  );
}
