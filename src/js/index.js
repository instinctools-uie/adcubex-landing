import {
  changeColorForImprovementSection,
  changeColorForBudgetSection,
  changeColorForControlSection,
  changeColorForPowerSection,
  changeMenuItemsColorToWhite,
  changeBackgroundColorToWhite,
  changeMenuItemsColorToBlack,
  changeCubeColorToDefault
} from './changeColor';
import { toggleCube, toggleCubes } from './toggleCubes';
import { toggleTextOfSection } from './toggleTextOfSection';
import { changeActiveMenuLinkToBlack, changeActiveMenuLinkToRed } from './menu';

const advantageSection = window.document.querySelector('.advantage-section');
const budgetSection = window.document.querySelector('.budget-section');
const controlSection = window.document.querySelector('.control-section');
const powerSection = window.document.querySelector('.power-section');
const improvementSection = window.document.querySelector('.improvement-section');
const advantageSectionScrollPosition = advantageSection.offsetTop;
const budgetSectionScrollPosition = budgetSection.offsetTop;
const controlSectionScrollPosition = controlSection.offsetTop;
const powerSectionScrollPosition = powerSection.offsetTop;
const improvementSectionScrollPosition = improvementSection.offsetTop;

initProject();

window.addEventListener('scroll', initProject);

function initProject() {
  const scrolled = window.pageYOffset;

  // ToDo: Find solution for remove "300"
  if (scrolled < advantageSectionScrollPosition || scrolled > improvementSectionScrollPosition - 300) {
    changeBackgroundColorToWhite();
    changeCubeColorToDefault();
  }

  if (scrolled > budgetSectionScrollPosition && scrolled < powerSectionScrollPosition) {
    changeMenuItemsColorToWhite();
  }

  if (scrolled < budgetSectionScrollPosition || scrolled > improvementSectionScrollPosition) {
    changeMenuItemsColorToBlack();
  }

  if (scrolled >= advantageSectionScrollPosition && scrolled <= budgetSectionScrollPosition) {
    changeColorForBudgetSection(advantageSectionScrollPosition);
  }

  if (scrolled > budgetSectionScrollPosition && scrolled <= controlSectionScrollPosition) {
    changeColorForControlSection(budgetSectionScrollPosition);
  }

  if (scrolled > controlSectionScrollPosition && scrolled <= powerSectionScrollPosition) {
    changeColorForPowerSection(controlSectionScrollPosition);
  }

  // ToDo: Find solution for remove "300"
  if (scrolled > powerSectionScrollPosition && scrolled <= improvementSectionScrollPosition - 300) {
    changeColorForImprovementSection(powerSectionScrollPosition);
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
