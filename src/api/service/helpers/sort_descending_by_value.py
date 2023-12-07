from typing import ItemsView


def sort_descending_by_value(dict_entries: ItemsView[str, int]) -> list[tuple[str, int]]:
    tuples_list = list(dict_entries)
    tuples_list.sort(key=lambda x: x[1], reverse=True)
    return tuples_list
