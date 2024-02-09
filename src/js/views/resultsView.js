import previewView from './previewView';
import View from './view';
import icons from 'url:../../img/icons.svg';
class ReslutsView extends View {
  _parentElement = document.querySelector('.results');
  _message = '';
  _errorMessage = `no recipes found for your search please try again `;

  _generateMarkup() {
    return this._data
      .map(result => previewView.render(result, false))
      .join('');
  }
}

export default new ReslutsView();
