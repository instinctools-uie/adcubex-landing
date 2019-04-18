import {
  changeColorForAdvantageSection,
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
const expertiseSection = window.document.querySelector('.expertise-section');
const investmentsSection = window.document.querySelector('.investments-section');
const advantageSectionScrollPosition = advantageSection.offsetTop;
const expertiseSectionScrollPosition = expertiseSection.offsetTop;
const investmentsSectionScrollPosition = investmentsSection.offsetTop;

window.addEventListener('scroll', initProject);

window.addEventListener('load', initProject);

function initProject() {
  const scrolled = window.pageYOffset;

  if (scrolled < advantageSectionScrollPosition) {
    changeBackgroundColorToWhite();
    changeCubeColorToDefault();
  }

  if (scrolled > expertiseSectionScrollPosition) {
    changeMenuItemsColorToWhite();
  }

  if (scrolled >= advantageSectionScrollPosition && scrolled <= expertiseSectionScrollPosition) {
    changeColorForAdvantageSection(advantageSectionScrollPosition);
  }

  if (scrolled > expertiseSectionScrollPosition && scrolled <= investmentsSectionScrollPosition) {
    changeColorForExpertiseSection(expertiseSectionScrollPosition);
  }

  if (scrolled > investmentsSectionScrollPosition) {
    changeColorForInvestmentsSection(investmentsSectionScrollPosition);
  }

  //  TODO: Find solution for remove "20"
  if (scrolled > expertiseSectionScrollPosition - 20) {
    changeActiveMenuItemToBlack();
  }

  //  TODO: Find solution for remove "20"
  if (scrolled < expertiseSectionScrollPosition - 20) {
    changeActiveMenuItemToRed();
  }

  toggleCube();
  toggleCubes();
  toggleTextOfSection();
}
