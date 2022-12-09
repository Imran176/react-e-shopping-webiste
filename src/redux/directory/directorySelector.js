import { createSelector } from "reselect";
import directory from "../../components/directory/directory";

const selectorDirectory = state => state.directory;

export const selectorDirectorySections = createSelector([selectorDirectory], directory => directory.sections)