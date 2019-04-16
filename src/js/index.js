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

function initProject() {
  const scrollPosition = window.pageYOffset;

  if (scrollPosition < advantageSectionScrollPosition) {
    changeBackgroundColorToWhite();
    changeCubeColorToDefault();
  }

  if (scrollPosition > expertiseSectionScrollPosition) {
    changeMenuItemsColorToWhite();
  }

  if (scrollPosition >= advantageSectionScrollPosition && scrollPosition <= expertiseSectionScrollPosition) {
    changeColorForAdvantageSection(advantageSectionScrollPosition);
  }

  if (scrollPosition > expertiseSectionScrollPosition && scrollPosition <= investmentsSectionScrollPosition) {
    changeColorForExpertiseSection(expertiseSectionScrollPosition);
  }

  if (scrollPosition > investmentsSectionScrollPosition) {
    changeColorForInvestmentsSection(investmentsSectionScrollPosition);
  }

  //  TODO: Find solution for remove "20"
  if (scrollPosition > expertiseSectionScrollPosition - 20) {
    changeActiveMenuItemToBlack();
  }

  //  TODO: Find solution for remove "20"
  if (scrollPosition < expertiseSectionScrollPosition - 20) {
    changeActiveMenuItemToRed();
  }

  toggleCube();
  toggleCubes();
  toggleTextOfSection();
}

window.addEventListener('scroll', initProject);

initProject();
