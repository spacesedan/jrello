/* c8b9027b3bb1e4ef05f4e44edddcec1a995fb601
 * This file is automatically generated by graphql-let. */

import * as Apollo from '@apollo/client';
export declare type Maybe<T> = T | null;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    ObjectId: any;
};
export declare type AddBoardInput = {
    bgColor: Scalars['String'];
    title: Scalars['String'];
};
export declare type AddCardInput = {
    parentId: Scalars['ObjectId'];
    title: Scalars['String'];
};
export declare type AddListInput = {
    parentId: Scalars['ObjectId'];
    title: Scalars['String'];
};
export declare type Board = {
    __typename?: 'Board';
    _id: Scalars['ObjectId'];
    author: User;
    bgColor: Scalars['String'];
    lists: Array<List>;
    title: Scalars['String'];
};
export declare type Card = {
    __typename?: 'Card';
    _id: Scalars['ObjectId'];
    list: List;
    title: Scalars['String'];
};
export declare type EditBoardInput = {
    id: Scalars['ObjectId'];
    title: Scalars['String'];
};
export declare type EditCardInput = {
    id: Scalars['ObjectId'];
    title: Scalars['String'];
};
export declare type EditListIdInput = {
    id: Scalars['ObjectId'];
    parentId: Scalars['ObjectId'];
};
export declare type EditListInput = {
    id: Scalars['ObjectId'];
    title: Scalars['String'];
};
export declare type List = {
    __typename?: 'List';
    _id: Scalars['ObjectId'];
    board: Board;
    cards: Array<Card>;
    title: Scalars['String'];
};
export declare type Mutation = {
    __typename?: 'Mutation';
    addBoard: Board;
    addCard: Card;
    addList: List;
    deleteBoard: Scalars['Boolean'];
    deleteCard: Scalars['Boolean'];
    deleteList: Scalars['Boolean'];
    editBoard: Board;
    editCard: Card;
    editList: List;
    editListId: Card;
    login?: Maybe<User>;
    logout: Scalars['Boolean'];
    register: User;
};
export declare type MutationAddBoardArgs = {
    input: AddBoardInput;
};
export declare type MutationAddCardArgs = {
    input: AddCardInput;
};
export declare type MutationAddListArgs = {
    input: AddListInput;
};
export declare type MutationDeleteBoardArgs = {
    boardId: Scalars['ObjectId'];
};
export declare type MutationDeleteCardArgs = {
    cardId: Scalars['ObjectId'];
};
export declare type MutationDeleteListArgs = {
    listId: Scalars['ObjectId'];
};
export declare type MutationEditBoardArgs = {
    input: EditBoardInput;
};
export declare type MutationEditCardArgs = {
    input: EditCardInput;
};
export declare type MutationEditListArgs = {
    input: EditListInput;
};
export declare type MutationEditListIdArgs = {
    input: EditListIdInput;
};
export declare type MutationLoginArgs = {
    email: Scalars['String'];
    password: Scalars['String'];
};
export declare type MutationRegisterArgs = {
    email: Scalars['String'];
    password: Scalars['String'];
};
export declare type Query = {
    __typename?: 'Query';
    allBoards: Array<Board>;
    allCards: Array<Card>;
    allLists: Array<List>;
    currentUser?: Maybe<User>;
    singleBoard?: Maybe<Board>;
};
export declare type QueryAllCardsArgs = {
    listId: Scalars['ObjectId'];
};
export declare type QueryAllListsArgs = {
    boardId: Scalars['ObjectId'];
};
export declare type QuerySingleBoardArgs = {
    boardId: Scalars['ObjectId'];
};
export declare type User = {
    __typename?: 'User';
    _id: Scalars['ObjectId'];
    email: Scalars['String'];
};
export declare type LoginMutationVariables = Exact<{
    password: Scalars['String'];
    email: Scalars['String'];
}>;
export declare type LoginMutation = ({
    __typename?: 'Mutation';
} & {
    login?: Maybe<({
        __typename?: 'User';
    } & Pick<User, '_id' | 'email'>)>;
});
export declare const LoginDocument: Apollo.DocumentNode;
export declare type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;
export declare function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>): Apollo.MutationTuple<LoginMutation, Exact<{
    password: string;
    email: string;
}>>;
export declare type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export declare type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export declare type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
