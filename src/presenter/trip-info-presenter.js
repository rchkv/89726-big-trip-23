import EventsListView from '../view/events-list-view.js';
import SortView from '../view/sort-view.js';
import {render} from '../render.js';


export default class TripInfoPresenter {
  eventsListComponent = new EventsListView();

  constructor({eventsListContainer}) {
    this.eventsListContainer = eventsListContainer;
  }

  init() {
    render(new SortView(), this.eventsListComponent.getElement());
    render(this.eventsListComponent, this.eventsListContainer);
  }
}