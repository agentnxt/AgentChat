import { agentchat } from 'agentchat-data-provider';
import type { DynamicSettingProps } from 'agentchat-data-provider';

type AgentChatKeys = keyof typeof agentchat;

type AgentChatParams = {
  modelOptions: Omit<NonNullable<DynamicSettingProps['conversation']>, AgentChatKeys>;
  resendFiles: boolean;
  promptPrefix?: string | null;
  maxContextTokens?: number;
  fileTokenLimit?: number;
  modelLabel?: string | null;
};

/**
 * Separates AgentChat-specific parameters from model options
 * @param options - The combined options object
 */
export function extractAgentChatParams(
  options?: DynamicSettingProps['conversation'],
): AgentChatParams {
  if (!options) {
    return {
      modelOptions: {} as Omit<NonNullable<DynamicSettingProps['conversation']>, AgentChatKeys>,
      resendFiles: agentchat.resendFiles.default as boolean,
    };
  }

  const modelOptions = { ...options };

  const resendFiles =
    (delete modelOptions.resendFiles, options.resendFiles) ??
    (agentchat.resendFiles.default as boolean);
  const promptPrefix = (delete modelOptions.promptPrefix, options.promptPrefix);
  const maxContextTokens = (delete modelOptions.maxContextTokens, options.maxContextTokens);
  const fileTokenLimit = (delete modelOptions.fileTokenLimit, options.fileTokenLimit);
  const modelLabel = (delete modelOptions.modelLabel, options.modelLabel);

  return {
    modelOptions: modelOptions as Omit<
      NonNullable<DynamicSettingProps['conversation']>,
      AgentChatKeys
    >,
    maxContextTokens,
    fileTokenLimit,
    promptPrefix,
    resendFiles,
    modelLabel,
  };
}
