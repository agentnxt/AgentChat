import type { PrincipalType } from 'agentchat-data-provider';
import type { Types } from 'mongoose';

export interface ResolvedPrincipal {
  principalType: PrincipalType;
  principalId?: string | Types.ObjectId;
}
