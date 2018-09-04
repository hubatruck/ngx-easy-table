import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  PaginationComponent,
  GlobalSearchComponent,
  SortComponent,
  ExportComponent,
  ClickEventComponent,
  TemplateComponent,
  SelectRowComponent,
  SelectColComponent,
  SelectCellComponent,
  ModalComponent,
  SearchComponent,
  BasicComponent,
  LiveUpdateComponent,
  ServerPaginationComponent,
  RowTemplateComponent,
  ServerSortComponent,
  GroupRowsComponent,
  ManyTablesComponent,
  DynamicRowComponent,
  CustomSortComponent,
  CollapsedRowsComponent,
  HorizontalScrollComponent,
  CheckboxesComponent,
  CustomFiltersComponent,
  ToggleColumnComponent,
  DynamicConfigurationComponent,
  CheckboxDefaultComponent,
  ExportsComponent,
  ResizableComponent,
  ColumnWidthComponent,
  FixedWidthComponent,
  CustomizeThemeComponent,
  StylesComponent,
  ColTemplateComponent,
  SummaryFooterComponent,
  FilterTemplateComponent,
} from './demo';

export const routes = [
  { path: '', component: BasicComponent },
  { path: 'search', component: SearchComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'server-pagination', component: ServerPaginationComponent },
  { path: 'server-sort', component: ServerSortComponent },
  { path: 'global-search', component: GlobalSearchComponent },
  { path: 'sort', component: SortComponent },
  { path: 'export-csv', component: ExportComponent },
  { path: 'click-event', component: ClickEventComponent },
  { path: 'template', component: TemplateComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'live-update', component: LiveUpdateComponent },
  { path: 'select-row', component: SelectRowComponent },
  { path: 'select-col', component: SelectColComponent },
  { path: 'select-cell', component: SelectCellComponent },
  { path: 'row-template', component: RowTemplateComponent },
  { path: 'group-rows', component: GroupRowsComponent },
  { path: 'many-tables', component: ManyTablesComponent },
  { path: 'dynamic-row', component: DynamicRowComponent },
  { path: 'custom-sort', component: CustomSortComponent },
  { path: 'collapsed-rows', component: CollapsedRowsComponent },
  { path: 'checkboxes', component: CheckboxesComponent },
  { path: 'checkboxes2', component: CheckboxDefaultComponent },
  { path: 'horizontal-scroll', component: HorizontalScrollComponent },
  { path: 'custom-filters', component: CustomFiltersComponent },
  { path: 'toggle-column', component: ToggleColumnComponent },
  { path: 'dynamic-conf', component: DynamicConfigurationComponent },
  { path: 'exports', component: ExportsComponent },
  { path: 'column-resizer', component: ResizableComponent },
  { path: 'column-width', component: ColumnWidthComponent },
  { path: 'fixed-width', component: FixedWidthComponent },
  { path: 'customize-theme', component: CustomizeThemeComponent },
  { path: 'styles', component: StylesComponent },
  { path: 'col-template', component: ColTemplateComponent },
  { path: 'summary-footer', component: SummaryFooterComponent },
  { path: 'filter-template', component: FilterTemplateComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
