import { BigInt } from "@graphprotocol/graph-ts"
import {
  SetToken,
  Approval,
  ComponentAdded,
  ComponentRemoved,
  DefaultPositionUnitEdited,
  ExternalPositionDataEdited,
  ExternalPositionUnitEdited,
  Invoked,
  ManagerEdited,
  ModuleAdded,
  ModuleInitialized,
  ModuleRemoved,
  PendingModuleRemoved,
  PositionModuleAdded,
  PositionModuleRemoved,
  PositionMultiplierEdited,
  Transfer
} from "../generated/SetToken/SetToken"
import { _Approval, _DefaultPositionUnitEdited, _ExternalPositionDataEdited,
   _ExternalPositionUnitEdited, _Invoked, _Transfer } from "../generated/schema"

export function handleApproval(event: Approval): void {
  let entity = _Approval.load(event.params.value.toHex())

  if (entity == null) {
    entity = new _Approval(event.params.value.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value
  entity.save()
}

export function handleComponentAdded(event: ComponentAdded): void {}

export function handleComponentRemoved(event: ComponentRemoved): void {}

export function handleDefaultPositionUnitEdited(
  event: DefaultPositionUnitEdited
): void {
  let entity = _DefaultPositionUnitEdited.load(event.params._realUnit.toHex())

  if (entity == null) {
    entity = new _DefaultPositionUnitEdited(event.params._realUnit.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity._component = event.params._component
  entity._realUnit = event.params._realUnit
  entity.save()
}

export function handleExternalPositionDataEdited(
  event: ExternalPositionDataEdited
): void {
  let entity = _ExternalPositionDataEdited.load(event.params._positionModule.toHex())

  if (entity == null) {
    entity = new _ExternalPositionDataEdited(event.params._positionModule.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity._component = event.params._component
  entity._data = event.params._data
  entity._positionModule = event.params._positionModule
  entity.save()
}

export function handleExternalPositionUnitEdited(
  event: ExternalPositionUnitEdited
): void {
  let entity = _ExternalPositionUnitEdited.load(event.params._positionModule.toHex())

  if (entity == null) {
    entity = new _ExternalPositionUnitEdited(event.params._positionModule.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity._component = event.params._component
  entity._realUnit = event.params._realUnit
  entity._positionModule = event.params._positionModule
  entity.save()
}

export function handleInvoked(event: Invoked): void {
  let entity = _Invoked.load(event.params._value.toHex())

  if (entity == null) {
    entity = new _Invoked(event.params._value.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity._target = event.params._target
  entity._value = event.params._value
  entity._data = event.params._data
  entity._returnValue = event.params._returnValue
  entity.save()
}

export function handleManagerEdited(event: ManagerEdited): void {}

export function handleModuleAdded(event: ModuleAdded): void {}

export function handleModuleInitialized(event: ModuleInitialized): void {}

export function handleModuleRemoved(event: ModuleRemoved): void {}

export function handlePendingModuleRemoved(event: PendingModuleRemoved): void {}

export function handlePositionModuleAdded(event: PositionModuleAdded): void {}

export function handlePositionModuleRemoved(
  event: PositionModuleRemoved
): void {}

export function handlePositionMultiplierEdited(
  event: PositionMultiplierEdited
): void {}

export function handleTransfer(event: Transfer): void {
  let entity = _Transfer.load(event.params.value.toHex())

  if (entity == null) {
    entity = new _Transfer(event.params.value.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value
  entity.save()
}
