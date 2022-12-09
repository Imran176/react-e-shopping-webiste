import { createSelector } from "reselect";
import CategoryPage from "../../pages/categoryPage/CategoryPage";

const selectShop = state => state.shop;

export const selectCollections = createSelector([selectShop], shop => shop.collections)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections.key)
)

export const selectCategory = categoryUrlParam =>
    createSelector(
        [selectCollections],
        collections => collections[categoryUrlParam]
    )