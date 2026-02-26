const Card = ({ image, title, category }) => {
  const categoryLabel = Array.isArray(category)
    ? category.join(" · ")
    : category;

  return (
    <div className="group relative cursor-pointer overflow-hidden rounded-xl transition-colors duration-200 hover:bg-neutral-100 dark:hover:bg-neutral-800/30">
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="h-auto w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <div className="px-4 text-center">
            <div className="text-base font-bold text-white drop-shadow-md">
              {title}
            </div>
            {categoryLabel && (
              <div className="mt-1 text-sm font-medium text-neutral-200/90">
                {categoryLabel}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
