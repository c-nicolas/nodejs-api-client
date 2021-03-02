import { AbstractEntity } from '../../abstractEntity'

/**
 * Fields that can be present in License response and request data.
 */
export enum LicenseFields {
  COLUMN_ACCEPT_EULA = 'accept_eula',
  COLUMN_AUTO_RENEW = 'auto_renew',
  COLUMN_BASE_SEAT = 'base_seat',
  COLUMN_CATEGORY = 'category',
  COLUMN_CLOUD_TYPE = 'cloud_type',
  COLUMN_CUSTOMER_NAME = 'customer_name',
  COLUMN_CUSTOMER_REF = 'customer_ref',
  COLUMN_END_DATE = 'end_date',
  COLUMN_FRIENDLY_NAME = 'friendly_name',
  COLUMN_ID = 'id',
  COLUMN_IS_ENABLED = 'isEnabled',
  COLUMN_LAST_UPDATE = 'lastUpdate',
  COLUMN_PARENT_LINE_ID = 'parent_line_id',
  COLUMN_MARKETPLACE = 'marketplace',
  COLUMN_MESSAGE = 'message',
  COLUMN_OFFER = 'offer',
  COLUMN_PARENT_ORDER_REF = 'parent_order_ref',
  COLUMN_PARTNER_REF = 'partner_ref',
  COLUMN_PERIODICITY = 'periodicity',
  COLUMN_RESELLER_NAME = 'reseller_name',
  COLUMN_RESELLER_REF = 'reseller_ref',
  COLUMN_SEAT = 'seat',
  COLUMN_SERVICE_REF = 'service_ref',
  COLUMN_SKU = 'sku',
  COLUMN_START_DATE = 'start_date',
  COLUMN_STATUS_CODE = 'status_code',
  COLUMN_STATUS_LABEL = 'status_label',
  COLUMN_SUBSCRIPTION_ID = 'subscription_id',
  COLUMN_SUBSIDIARY_NAME = 'subsidiary_name',
  COLUMN_TERM = 'term',
  COLUMN_TRIAL = 'trial',
  COLUMN_TYPE = 'type',
  COLUMN_UOM = 'uom',
  COLUMN_VENDOR_CODE = 'vendor_code',
  COLUMN_VENDOR_NAME = 'vendor_name',
  COLUMN_VENDOR_SUBSCRIPTION_ID = 'vendor_subscription_id',
  COLUMN_PRICE = 'price',
  PRICE_BUY_PRICE = 'buy_price',
  PRICE_LIST_PRICE = 'list_price',
  PRICE_CURRENCY = 'currency',
  COLUMN_ACTIVE_SEATS = 'active_seats',
  ACTIVE_SEATS_LAST_UPDATE = 'lastUpdate',
  ACTIVE_SEATS_NUMBER = 'number',
}

/**
 * License data fields and their corresponding types
 */
export type LicenseData = {
  [LicenseFields.COLUMN_ID]: number
  [LicenseFields.COLUMN_ACCEPT_EULA]: boolean
  [LicenseFields.COLUMN_ACTIVE_SEATS]: {
    [LicenseFields.ACTIVE_SEATS_LAST_UPDATE]: string | null
    [LicenseFields.ACTIVE_SEATS_NUMBER]: number | null
  }
  [LicenseFields.COLUMN_AUTO_RENEW]: boolean
  [LicenseFields.COLUMN_BASE_SEAT]: number
  [LicenseFields.COLUMN_CATEGORY]: string
  [LicenseFields.COLUMN_CLOUD_TYPE]: string
  [LicenseFields.COLUMN_CUSTOMER_NAME]: string
  [LicenseFields.COLUMN_CUSTOMER_REF]: string
  [LicenseFields.COLUMN_END_DATE]: string
  [LicenseFields.COLUMN_FRIENDLY_NAME]: string | null
  [LicenseFields.COLUMN_IS_ENABLED]: boolean
  [LicenseFields.COLUMN_LAST_UPDATE]: string | null
  [LicenseFields.COLUMN_MARKETPLACE]: string
  [LicenseFields.COLUMN_MESSAGE]: string
  [LicenseFields.COLUMN_OFFER]: string
  [LicenseFields.COLUMN_PARENT_LINE_ID]: number | null
  [LicenseFields.COLUMN_PARENT_ORDER_REF]: string | null
  [LicenseFields.COLUMN_PARTNER_REF]: string
  [LicenseFields.COLUMN_PERIODICITY]: number
  [LicenseFields.COLUMN_PRICE]: {
    [LicenseFields.PRICE_BUY_PRICE]: number
    [LicenseFields.PRICE_LIST_PRICE]: number
    [LicenseFields.PRICE_CURRENCY]: string | null
  }
  [LicenseFields.COLUMN_RESELLER_NAME]: string
  [LicenseFields.COLUMN_RESELLER_REF]: string
  [LicenseFields.COLUMN_SEAT]: number
  [LicenseFields.COLUMN_SERVICE_REF]: string
  [LicenseFields.COLUMN_SKU]: string
  [LicenseFields.COLUMN_START_DATE]: string
  [LicenseFields.COLUMN_STATUS_CODE]: number
  [LicenseFields.COLUMN_STATUS_LABEL]: string
  [LicenseFields.COLUMN_SUBSCRIPTION_ID]: string
  [LicenseFields.COLUMN_SUBSIDIARY_NAME]: string
  [LicenseFields.COLUMN_TERM]: number
  [LicenseFields.COLUMN_TRIAL]: boolean
  [LicenseFields.COLUMN_TYPE]: string
  [LicenseFields.COLUMN_UOM]: string
  [LicenseFields.COLUMN_VENDOR_CODE]: string
  [LicenseFields.COLUMN_VENDOR_NAME]: string
  [LicenseFields.COLUMN_VENDOR_SUBSCRIPTION_ID]: string | null
}

/**
 * Abstract class of a License entity. Can only be instantiated through a {@link LicenseFindResult} object class
 */
export abstract class AbstractLicense extends AbstractEntity<LicenseData> {
  protected VALIDATION_RULES = {
    [LicenseFields.COLUMN_ID]: 'required|numeric',
    [LicenseFields.COLUMN_SUBSCRIPTION_ID]: 'required',
    [LicenseFields.COLUMN_VENDOR_NAME]: 'required',
    [LicenseFields.COLUMN_VENDOR_CODE]: 'required',
    [LicenseFields.COLUMN_SUBSIDIARY_NAME]: 'required',
    [LicenseFields.COLUMN_PARTNER_REF]: 'required',
    [LicenseFields.COLUMN_STATUS_CODE]: 'required|numeric',
    [LicenseFields.COLUMN_STATUS_LABEL]: 'required',
    [LicenseFields.COLUMN_SKU]: 'required',
    [LicenseFields.COLUMN_CLOUD_TYPE]: 'required',
    [LicenseFields.COLUMN_BASE_SEAT]: 'present|numeric',
    [LicenseFields.COLUMN_SEAT]: 'present|numeric',
    [LicenseFields.COLUMN_TRIAL]: 'present|boolean',
    [LicenseFields.COLUMN_AUTO_RENEW]: 'present|boolean',
    [LicenseFields.COLUMN_OFFER]: 'required',
    [LicenseFields.COLUMN_ACCEPT_EULA]: 'present|boolean',
    [LicenseFields.COLUMN_PRICE]: 'required|object',
    [`${LicenseFields.COLUMN_PRICE}.${LicenseFields.PRICE_BUY_PRICE}`]: 'present|numeric',
    [`${LicenseFields.COLUMN_PRICE}.${LicenseFields.PRICE_LIST_PRICE}`]: 'present|numeric',
    [`${LicenseFields.COLUMN_PRICE}.${LicenseFields.PRICE_CURRENCY}`]: 'present',
  }

  readonly #acceptEula: boolean
  readonly #activeSeatsLastUpdate: string | null
  readonly #activeSeatsNumber: number | null
  readonly #autoRenew: boolean
  readonly #baseSeat: number
  readonly #buyPrice: number
  readonly #category: string
  readonly #classification: string
  readonly #currency: string | null
  readonly #customerName: string
  readonly #customerRef: string
  readonly #endDate: string
  readonly #friendlyName: string | null
  readonly #id: number
  readonly #enabled: boolean
  readonly #lastUpdate: string | null
  readonly #listPrice: number
  readonly #marketplace: string
  readonly #message: string
  readonly #offer: string
  readonly #parentLineId: number | null
  readonly #parentOrderRef: string | null
  readonly #partnerRef: string
  readonly #periodicity: number
  readonly #resellerName: string
  readonly #resellerRef: string
  readonly #seat: number
  readonly #serviceRef: string
  readonly #sku: string
  readonly #startDate: string
  readonly #statusCode: number
  readonly #statusLabel: string
  readonly #subscriptionId: string
  readonly #subsidiaryName: string
  readonly #term: number
  readonly #trial: boolean
  readonly #type: string
  readonly #uom: string
  readonly #vendorCode: string
  readonly #vendorName: string
  readonly #vendorSubscriptionId: string | null

  /**
   * AbstractLicense constructor.
   *
   * @param data - License data to construct the entity with.
   */
  protected constructor(data: LicenseData) {
    super(data)

    this.#acceptEula = data[LicenseFields.COLUMN_ACCEPT_EULA]
    this.#activeSeatsLastUpdate =
      data[LicenseFields.COLUMN_ACTIVE_SEATS][
        LicenseFields.ACTIVE_SEATS_LAST_UPDATE
      ]
    this.#activeSeatsNumber =
      data[LicenseFields.COLUMN_ACTIVE_SEATS][LicenseFields.ACTIVE_SEATS_NUMBER]
    this.#autoRenew = data[LicenseFields.COLUMN_AUTO_RENEW]
    this.#baseSeat = data[LicenseFields.COLUMN_BASE_SEAT]
    this.#buyPrice =
      data[LicenseFields.COLUMN_PRICE][LicenseFields.PRICE_BUY_PRICE]
    this.#category = data[LicenseFields.COLUMN_CATEGORY]
    this.#classification = data[LicenseFields.COLUMN_CLOUD_TYPE]
    this.#currency =
      data[LicenseFields.COLUMN_PRICE][LicenseFields.PRICE_CURRENCY]
    this.#customerName = data[LicenseFields.COLUMN_CUSTOMER_NAME]
    this.#customerRef = data[LicenseFields.COLUMN_CUSTOMER_REF]
    this.#endDate = data[LicenseFields.COLUMN_END_DATE]
    this.#friendlyName = data[LicenseFields.COLUMN_FRIENDLY_NAME]
    this.#id = data[LicenseFields.COLUMN_ID]
    this.#enabled = data[LicenseFields.COLUMN_IS_ENABLED]
    this.#lastUpdate = data[LicenseFields.COLUMN_LAST_UPDATE]
    this.#listPrice =
      data[LicenseFields.COLUMN_PRICE][LicenseFields.PRICE_LIST_PRICE]
    this.#marketplace = data[LicenseFields.COLUMN_MARKETPLACE]
    this.#message = data[LicenseFields.COLUMN_MESSAGE]
    this.#offer = data[LicenseFields.COLUMN_OFFER]
    this.#parentLineId = data[LicenseFields.COLUMN_PARENT_LINE_ID]
    this.#parentOrderRef = data[LicenseFields.COLUMN_PARENT_ORDER_REF]
    this.#partnerRef = data[LicenseFields.COLUMN_PARTNER_REF]
    this.#periodicity = data[LicenseFields.COLUMN_PERIODICITY]
    this.#resellerName = data[LicenseFields.COLUMN_RESELLER_NAME]
    this.#resellerRef = data[LicenseFields.COLUMN_RESELLER_REF]
    this.#seat = data[LicenseFields.COLUMN_SEAT]
    this.#serviceRef = data[LicenseFields.COLUMN_SERVICE_REF]
    this.#sku = data[LicenseFields.COLUMN_SKU]
    this.#startDate = data[LicenseFields.COLUMN_START_DATE]
    this.#statusCode = data[LicenseFields.COLUMN_STATUS_CODE]
    this.#statusLabel = data[LicenseFields.COLUMN_STATUS_LABEL]
    this.#subscriptionId = data[LicenseFields.COLUMN_SUBSCRIPTION_ID]
    this.#subsidiaryName = data[LicenseFields.COLUMN_SUBSIDIARY_NAME]
    this.#term = data[LicenseFields.COLUMN_TERM]
    this.#trial = data[LicenseFields.COLUMN_TRIAL]
    this.#type = data[LicenseFields.COLUMN_TYPE]
    this.#uom = data[LicenseFields.COLUMN_UOM]
    this.#vendorCode = data[LicenseFields.COLUMN_VENDOR_CODE]
    this.#vendorName = data[LicenseFields.COLUMN_VENDOR_NAME]
    this.#vendorSubscriptionId =
      data[LicenseFields.COLUMN_VENDOR_SUBSCRIPTION_ID]
  }

  public getId(): number {
    return this.#id
  }

  public isAcceptEula(): boolean {
    return this.#acceptEula
  }

  public getActiveSeatsLastUpdate(): string | null {
    return this.#activeSeatsLastUpdate
  }

  public getActiveSeatsNumber(): number | null {
    return this.#activeSeatsNumber
  }

  public isAutoRenew(): boolean {
    return this.#autoRenew
  }

  public getBaseSeat(): number {
    return this.#baseSeat
  }

  public getBuyPrice(): number {
    return this.#buyPrice
  }

  public getCategory(): string {
    return this.#category
  }

  public getClassification(): string {
    return this.#classification
  }

  public getCurrency(): string | null {
    return this.#currency
  }

  public getCustomerName(): string {
    return this.#customerName
  }

  public getCustomerRef(): string {
    return this.#customerRef
  }

  public getEndDate(): string {
    return this.#endDate
  }

  public getFriendlyName(): string | null {
    return this.#friendlyName
  }

  public isEnabled(): boolean {
    return this.#enabled
  }

  public getLastUpdate(): string | null {
    return this.#lastUpdate
  }

  public getListPrice(): number {
    return this.#listPrice
  }

  public getMarketplace(): string {
    return this.#marketplace
  }

  public getMessage(): string {
    return this.#message
  }

  public getOffer(): string {
    return this.#offer
  }

  public getParentLineId(): number | null {
    return this.#parentLineId
  }

  public getParentOrderRef(): string | null {
    return this.#parentOrderRef
  }

  public getPartnerRef(): string {
    return this.#partnerRef
  }

  public getPeriodicity(): number {
    return this.#periodicity
  }

  public getResellerName(): string {
    return this.#resellerName
  }

  public getResellerRef(): string {
    return this.#resellerRef
  }

  public getSeat(): number {
    return this.#seat
  }

  public getServiceRef(): string {
    return this.#serviceRef
  }

  public getSku(): string {
    return this.#sku
  }

  public getStartDate(): string {
    return this.#startDate
  }

  public getStatusCode(): number {
    return this.#statusCode
  }

  public getStatusLabel(): string {
    return this.#statusLabel
  }

  public getSubscriptionId(): string {
    return this.#subscriptionId
  }

  public getSubsidiaryName(): string {
    return this.#subsidiaryName
  }

  public getTerm(): number {
    return this.#term
  }

  public isTrial(): boolean {
    return this.#trial
  }

  public getType(): string {
    return this.#type
  }

  public getUom(): string {
    return this.#uom
  }

  public getVendorCode(): string {
    return this.#vendorCode
  }

  public getVendorName(): string {
    return this.#vendorName
  }

  public getVendorSubscriptionId(): string | null {
    return this.#vendorSubscriptionId
  }

  /**
   * Plain JSON object representation of the license entity.
   * @returns {@link LicenseData}
   */
  public toJSON(): LicenseData {
    return {
      [LicenseFields.COLUMN_ID]: this.getId(),
      [LicenseFields.COLUMN_ACCEPT_EULA]: this.isAcceptEula(),
      [LicenseFields.COLUMN_ACTIVE_SEATS]: {
        [LicenseFields.ACTIVE_SEATS_NUMBER]: this.getActiveSeatsNumber(),
        [LicenseFields.ACTIVE_SEATS_LAST_UPDATE]: this.getActiveSeatsLastUpdate(),
      },
      [LicenseFields.COLUMN_AUTO_RENEW]: this.isAutoRenew(),
      [LicenseFields.COLUMN_BASE_SEAT]: this.getBaseSeat(),
      [LicenseFields.COLUMN_CATEGORY]: this.getCategory(),
      [LicenseFields.COLUMN_CLOUD_TYPE]: this.getClassification(),
      [LicenseFields.COLUMN_CUSTOMER_NAME]: this.getCustomerName(),
      [LicenseFields.COLUMN_CUSTOMER_REF]: this.getCustomerRef(),
      [LicenseFields.COLUMN_END_DATE]: this.getEndDate(),
      [LicenseFields.COLUMN_FRIENDLY_NAME]: this.getFriendlyName(),
      [LicenseFields.COLUMN_IS_ENABLED]: this.isEnabled(),
      [LicenseFields.COLUMN_LAST_UPDATE]: this.getLastUpdate(),
      [LicenseFields.COLUMN_MARKETPLACE]: this.getMarketplace(),
      [LicenseFields.COLUMN_MESSAGE]: this.getMessage(),
      [LicenseFields.COLUMN_OFFER]: this.getOffer(),
      [LicenseFields.COLUMN_PARENT_LINE_ID]: this.getParentLineId(),
      [LicenseFields.COLUMN_PARENT_ORDER_REF]: this.getParentOrderRef(),
      [LicenseFields.COLUMN_PARTNER_REF]: this.getPartnerRef(),
      [LicenseFields.COLUMN_PERIODICITY]: this.getPeriodicity(),
      [LicenseFields.COLUMN_PRICE]: {
        [LicenseFields.PRICE_BUY_PRICE]: this.getBuyPrice(),
        [LicenseFields.PRICE_LIST_PRICE]: this.getListPrice(),
        [LicenseFields.PRICE_CURRENCY]: this.getCurrency(),
      },
      [LicenseFields.COLUMN_RESELLER_NAME]: this.getResellerName(),
      [LicenseFields.COLUMN_RESELLER_REF]: this.getResellerRef(),
      [LicenseFields.COLUMN_SEAT]: this.getSeat(),
      [LicenseFields.COLUMN_SERVICE_REF]: this.getServiceRef(),
      [LicenseFields.COLUMN_SKU]: this.getSku(),
      [LicenseFields.COLUMN_START_DATE]: this.getStartDate(),
      [LicenseFields.COLUMN_STATUS_CODE]: this.getStatusCode(),
      [LicenseFields.COLUMN_STATUS_LABEL]: this.getStatusLabel(),
      [LicenseFields.COLUMN_SUBSCRIPTION_ID]: this.getSubscriptionId(),
      [LicenseFields.COLUMN_SUBSIDIARY_NAME]: this.getSubsidiaryName(),
      [LicenseFields.COLUMN_TERM]: this.getTerm(),
      [LicenseFields.COLUMN_TRIAL]: this.isTrial(),
      [LicenseFields.COLUMN_TYPE]: this.getType(),
      [LicenseFields.COLUMN_UOM]: this.getUom(),
      [LicenseFields.COLUMN_VENDOR_CODE]: this.getVendorCode(),
      [LicenseFields.COLUMN_VENDOR_NAME]: this.getVendorName(),
      [LicenseFields.COLUMN_VENDOR_SUBSCRIPTION_ID]: this.getVendorSubscriptionId(),
    }
  }
}
