import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filteredField={"discount"}
        options={[
          { value: "all", label: "All" },
          { value: "with-discount", label: "With Discount" },
          { value: "no-discount", label: "No Discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-desc", label: "Sort by name (Z-A)" },
          { value: "regularPrice-asc", label: "Sort by price (Low First)" },
          { value: "regularPrice-desc", label: "Sort by price (High First)" },
          { value: "maxCapacity-asc", label: "Sort by capacity (High First)" },
          { value: "maxCapacity-desc", label: "Sort by capacity (High First)" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
