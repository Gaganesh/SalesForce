interface AttributeType {
    type: string,
}

export interface FriendType {
    Name: string,
    First_Name__c: string,
    Last_Name__c: string,
    Age__c: number,
    attributes: AttributeType,
}