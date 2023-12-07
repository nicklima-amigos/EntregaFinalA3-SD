from typing import ItemsView


def sort_descending_by_value(tuples: ItemsView[str, int]) -> list[tuple[str, int]]:
    tuples_list = list(tuples)
    tuples_list.sort(key=lambda x: x[1], reverse=True)
    return tuples_list
