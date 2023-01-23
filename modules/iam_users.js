export function loadIamUsers(state, stack) {
  const records = state.resources.filter((r) => r.type === 'aws_iam_user');
  stack.push({
    isGroup: true,
    title: 'Identity Access Manager (IAM)',
    reference: 'IAMGroup',
    id: 'iam',
  });
  records.forEach((r, idx) => {
    stack.push({
      isGroup: false,
      title: r.instances[0].attributes.name,
      reference: 'UserIMG',
      id: `iam_user_${idx}`,
    });
  });
  stack.push({
    endGroup: true,
  });
}
