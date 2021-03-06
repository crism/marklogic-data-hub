export enum ConfirmationType {
  Identifer = "identifier",
  DeleteEntity = "deleteEntity",
  DeleteEntityRelationshipWarn = "deleteEntityRelationshipWarn",
  DeleteEntityRelationshipOutstandingEditWarn = "deleteEntityRelationshipOutstandingEditWarn",
  DeleteEntityNoRelationshipOutstandingEditWarn = "deleteEntityNoRelationshipOutstandingEditWarn",
  DeleteEntityStepWarn = "deleteEntityStepWarn",
  DeletePropertyWarn = "deletePropertyWarn",
  DeletePropertyStepWarn = "deletePropertyStepWarn",
  SaveEntity = "saveEntity",
  SaveAll = "saveAllEntity",
  RevertEntity = "revertEntity",
  RevertAll = "revertAllEntity",
  NavigationWarn = "navigationWarn",
  DeleteStep = "deleteStep",
  AddStepToFlow = "addStepToFlow",
  DiscardChanges = "discardChanges"
}

declare global {
  interface Window {
    pendo: any,
    usePendo: any
  }
}