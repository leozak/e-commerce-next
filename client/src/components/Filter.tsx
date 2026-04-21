"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleFilter = (sort: string | null) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", sort || "newest");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex items-center justify-end gap-2 text-sm text-gray-500 my-6">
      <span>Ordenar:</span>
      <select
        name="sort"
        id="sort"
        className="ring-1 ring-gray-200 shadow-md p-1 rounded-md"
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value="newest">Mais recentes</option>
        <option value="oldest">Mais antigos</option>
        <option value="asc">Menor preço</option>
        <option value="desc">Maior preço</option>
      </select>
    </div>
  );
};

export default Filter;
