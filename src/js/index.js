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
import { changeActiveMenuLinkToBlack, changeActiveMenuLinkToRed } from './menu';

const advantageSection = window.document.querySelector('.advantage-section');
const budgetSection = window.document.querySelector('.budget-section');
const controlSection = window.document.querySelector('.control-section');
const toolsetSection = window.document.querySelector('.toolset-section');
const advantageSectionScrollPosition = advantageSection.offsetTop;
const budgetSectionScrollPosition = budgetSection.offsetTop;
const controlSectionScrollPosition = controlSection.offsetTop;
const toolsetSectionScrollPosition = toolsetSection.offsetTop;

initProject();

window.addEventListener('scroll', initProject);

function initProject() {
  const scrolled = window.pageYOffset;

  if (scrolled < advantageSectionScrollPosition) {
    changeBackgroundColorToWhite();
    changeCubeColorToDefault();
  }

  if (scrolled > budgetSectionScrollPosition && scrolled < toolsetSectionScrollPosition) {
    changeMenuItemsColorToWhite();
  }

  if (scrolled >= advantageSectionScrollPosition && scrolled <= budgetSectionScrollPosition) {
    changeColorForBudgetSection(advantageSectionScrollPosition);
  }

  if (scrolled > budgetSectionScrollPosition && scrolled <= controlSectionScrollPosition) {
    changeColorForExpertiseSection(budgetSectionScrollPosition);
  }

  if (scrolled > controlSectionScrollPosition && scrolled <= toolsetSectionScrollPosition) {
    changeColorForInvestmentsSection(controlSectionScrollPosition);
  }

  if (scrolled > toolsetSectionScrollPosition) {
    changeBackgroundColorToWhite();
    changeMenuItemsColorToBlack();
    changeCubeColorToDefault();
  }

  // TODO: Find solution for remove "20"
  if (scrolled > budgetSectionScrollPosition - 20) {
    changeActiveMenuLinkToBlack();
  }

  // TODO: Find solution for remove "20"
  if (scrolled < budgetSectionScrollPosition - 20) {
    changeActiveMenuLinkToRed();
  }

  toggleCube();
  toggleCubes();
  toggleTextOfSection();
}
