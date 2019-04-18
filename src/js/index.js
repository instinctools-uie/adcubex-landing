import {
  changeMenuItemsColorToBlack,
  changeColorForBudgetSection,
  changeColorForExpertiseSection,
  changeColorForInvestmentsSection,
  changeMenuItemsColorToWhite,
  changeBackgroundColorToWhite,
  changeCubeColorToDefault
} from './changeColor';
import { toggleCube, toggleCubes } from './toggleCubes';
import { toggleTextOfSection } from './toggleTextOfSection';
import { changeActiveMenuItemToBlack, changeActiveMenuItemToRed } from './menu';

const advantageSection = window.document.querySelector('.advantage-section');
const budgetSection = window.document.querySelector('.budget-section');
const controlSection = window.document.querySelector('.control-section');
const toolsetSection = window.document.querySelector('.toolset-section');
const advantageSectionScrollPosition = advantageSection.offsetTop;
const budgetSectionScrollPosition = budgetSection.offsetTop;
const controlSectionScrollPosition = controlSection.offsetTop;
const toolsetSectionScrollPosition = toolsetSection.offsetTop;

function initProject() {
  const scrollPosition = window.pageYOffset;

  if (scrollPosition < advantageSectionScrollPosition) {
    changeBackgroundColorToWhite();
    changeCubeColorToDefault();
  }

  if (scrollPosition > budgetSectionScrollPosition && scrollPosition < toolsetSectionScrollPosition) {
    changeMenuItemsColorToWhite();
  }

  if (scrollPosition >= advantageSectionScrollPosition && scrollPosition <= budgetSectionScrollPosition) {
    changeColorForBudgetSection(advantageSectionScrollPosition);
  }

  if (scrollPosition > budgetSectionScrollPosition && scrollPosition <= controlSectionScrollPosition) {
    changeColorForExpertiseSection(budgetSectionScrollPosition);
  }

  if (scrollPosition > controlSectionScrollPosition && scrollPosition <= toolsetSectionScrollPosition) {
    changeColorForInvestmentsSection(controlSectionScrollPosition);
  }

  if (scrollPosition > toolsetSectionScrollPosition) {
    changeBackgroundColorToWhite();
    changeMenuItemsColorToBlack();
    changeCubeColorToDefault();
  }

  // TODO: Find solution for remove "20"
  if (scrollPosition > budgetSectionScrollPosition - 20) {
    changeActiveMenuItemToBlack();
  }

  // TODO: Find solution for remove "20"
  if (scrollPosition < budgetSectionScrollPosition - 20) {
    changeActiveMenuItemToRed();
  }

  toggleCube();
  toggleCubes();
  toggleTextOfSection();
}

window.addEventListener('scroll', initProject);

window.addEventListener('load', initProject);
