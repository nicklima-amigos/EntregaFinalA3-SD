def sort_dict_items_descending_by_value(dict: dict[str, int]) -> list[tuple[str, int]]:
    tuples_list = list(dict.items())
    tuples_list.sort(key=lambda x: x[1], reverse=True)
    return tuples_list
